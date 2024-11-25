const { HttpException } = require('../../../presentation/errors/http');

const { redisClient } = require('./../../../infra/database/redis');

class ListReceiptsForUserAction {
  /**
   * @param {Object} dependencies
   * @param {Repositories.IReceiptRepository} dependencies.receiptRepository
   */
  constructor({ receiptRepository }) {
    this.receiptRepository = receiptRepository;
  }

  /**
   * Retrieves all receipts for a user.
   * @param {string} userId
   * @returns {Promise<Entities.Receipt[]>}
   */
  async execute(userId) {
    if (!userId) {
      throw new Error('User ID is required');
    }

    const cacheKey = `Receipts:${userId}`;

    const cachedReceipts = await redisClient.get(cacheKey);

    if (cachedReceipts) {
      const receipts = JSON.parse(cachedReceipts);

      if (receipts.length === 0) {
        throw new HttpException(404, 'No receipts found');
      }

      return receipts;
    }

    const receipts = await this.receiptRepository.getByUserId(userId);

    redisClient.set(cacheKey, JSON.stringify(receipts), 'EX', 3600);

    if (receipts.length === 0) {
      throw new HttpException(404, 'No receipts found');
    }

    return receipts;
  }
}

module.exports = { ListReceiptsForUserAction };

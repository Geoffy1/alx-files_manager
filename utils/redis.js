import redis from 'redis';
import { promisify } from 'util';

/**
 * Represents a Redis client.
 *
class RedisClient {
  /**
   * Creates a new RedisClient instance.
   */
  constructor() {
    this.client = redis.createClient();

    this.client.on('error', (error) => {
      console.error('Redis client error:', error);
    });
  }

  /**
   * Checks if this client's connection to the Redis server is active.
   * @returns {boolean}
   */
  isAlive() {
    return this.client.connected;
  }

   /**
   * Retrieves the val of a given key.
   * @param {String} key The key of the item to retrieve.
   * @returns {String | Object}
   */
  async get(key) {
    const getAsync = promisify(this.client.get).bind(this.client);
    return getAsync(key);
  }

  /**
   * Stores a key and its val along with an expiration time.
   * @param {String} key The key of the item to store.
   * @param {String | Number | Boolean} value The item to store.
   * @param {Number} duration The expiration time of the item in seconds.
   * @returns {Promise<void>}
   */
  async set(key, value, duration) {
    this.client.set(key, value);
    this.client.expire(key, duration);
  }

  /**
   * Removes the val of a given key.
   * @param {String} key The key of the item to remove.
   * @returns {Promise<void>}
   */
  async del(key) {
    this.client.del(key);
  }
}

const redisClient = new RedisClient();
export default redisClient;

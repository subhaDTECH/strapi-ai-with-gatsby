'use strict';

/**
 * admin123 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::admin123.admin123');

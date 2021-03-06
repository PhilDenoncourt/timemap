import Joi from 'joi'

const eventSchema = Joi.object().keys({
  id: Joi.string().required(),
  description: Joi.string().allow('').required(),
  date: Joi.string().allow(''),
  time: Joi.string().allow(''),
  time_precision: Joi.string().allow(''),
  location: Joi.string().allow(''),
  latitude: Joi.string().allow(''),
  longitude: Joi.string().allow(''),
  type: Joi.string().allow(''),
  category: Joi.string().required(),
  narratives: Joi.array(),
  sources: Joi.array(),
  tags: Joi.array().allow(''),
  comments: Joi.string().allow(''),
  timestamp: Joi.string(),

  // nested
  narrative___stepStyles: Joi.array()
})
  .and('latitude', 'longitude')
  .and('date', 'time', 'timestamp')
  .or('timestamp', 'latitude')

export default eventSchema

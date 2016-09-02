import { expect } from 'chai';
import schema from '../../../src/data/schema';

describe('GraphQL Schema', () => {
  const requiredQueries = [
    'content',
    'champion',
    'champions',
    'item',
    'items',
    'languages',
    'languageStrings',
    'maps',
    'server',
  ];

  it('should contain all our queries', () => {
    expect(schema).to.be.an('object');
    expect(schema).to.have.property('_queryType');

    const { _queryType } = schema;
    expect(_queryType).to.be.an('object');
    expect(_queryType).to.have.property('_fields');

    const { _fields } = _queryType;
    expect(_fields).to.be.an('object');
    requiredQueries.forEach((query) => {
      expect(_fields).to.have.property(query);
    });
  });
});

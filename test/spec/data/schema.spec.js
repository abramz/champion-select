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
    schema.should.be.an('object');
    schema.should.have.property('_queryType');

    const { _queryType } = schema;
    _queryType.should.be.an('object');
    _queryType.should.have.property('_fields');

    const { _fields } = _queryType;
    _fields.should.be.an('object');
    requiredQueries.forEach((query) => {
      _fields.should.have.property(query);
    });
  });
});

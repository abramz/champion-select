import sinon from 'sinon';

export const getValidChampOpts = sinon.stub()
  .withArgs(['success'])
  .returns(['success']);
getValidChampOpts
  .withArgs(['fail'])
  .returns(['fail']);

export const getValidItemListOpts = sinon.stub()
  .withArgs(['success'])
  .returns(['success']);
getValidItemListOpts
  .withArgs(['fail'])
  .returns(['fail']);

export const getValidItemOpts = sinon.stub()
  .withArgs(['success'])
  .returns(['success']);
getValidItemOpts
  .withArgs(['fail'])
  .returns(['fail']);

export const checkId = sinon.stub()
  .throws(new Error('fail'));
checkId
  .withArgs('success')
  .returns(true);

export const checkLocale = sinon.stub()
  .throws(new Error('fail'));
checkLocale
  .withArgs('success')
  .returns(true);

export async function makeFetch(route, locale, query) {
  if (query && query[0] === 'fail') {
    throw new Error('fetch fail');
  }

  const pretendAsync = new Promise((resolve) => {
    resolve('fetch success');
  });
  return await pretendAsync;
}

export async function makeFetchFail() {
  throw new Error('fetch fail');
}

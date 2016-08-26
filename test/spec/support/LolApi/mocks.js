import sinon from 'sinon';
import serverSuccess from './serverSuccess';

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

export const makeFetchSuccess = sinon.stub()
  .resolves('fetch success');
makeFetchSuccess
  .withArgs('realm')
  .resolves(serverSuccess);

export const makeFetchFail = sinon.stub()
  .rejects('fetch fail');

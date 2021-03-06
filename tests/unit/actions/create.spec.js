import { expect } from 'chai'

import createJsonapiModule from '../utils/createJsonapiModule'

describe('create', function () {
  let jsonapiModule

  beforeEach(function () {
    jsonapiModule = createJsonapiModule(this.api)
  })

  it('should be an alias for post', function () {
    expect(jsonapiModule.actions.create).to.equal(jsonapiModule.actions.post)
  })
})

import Base from './Base'

class TagType extends Base{
  constructor () {
    super()
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.delete = this.delete.bind(this)
    this.getRow = this.getRow.bind(this)
    this.getList = this.getList.bind(this)
    this.getAll = this.getAll.bind(this)
  }
  async create (req, res, next) {
    const params = req.body,
          arr = [
          ],
          result = this.check(arr)
    if (!result.success) {
      res.json({
        code: 20301,
        success: false,
        message: result.message
      })
      return
    }
    next()
  }
  async update (req, res, next) {
    const params = req.body,
          arr = [
          ],
          result = this.check(arr)
    if (!result.success) {
      res.json({
        code: 20301,
        success: false,
        message: result.message
      })
      return
    }
    next()
  }
  async delete (req, res, next) {
    const ID = req.params.id,
          arr = [
            {label: 'ID', value: ID, rules: ['notnull']}
          ],
          result = this.check(arr)
    if (!result.success) {
      res.json({
        code: 20301,
        success: false,
        message: result.message
      })
      return
    }    
    next()
  }
  async getRow (req, res, next) {
    const ID = req.params.id,
          arr = [
            {label: 'ID', value: ID, rules: ['notnull']}
          ],
          result = this.check(arr)
    if (!result.success) {
      res.json({
        code: 20301,
        success: false,
        message: result.message
      })
      return
    }    
    next()
  }
  async getList (req, res, next) {
    const data = req.query,
          arr = [
            {label: 'curPage', value: data.curPage, rules: ['notnull', 'number']},
            {label: 'pageSize', value: data.curPage, rules: ['notnull', 'number']}
          ],
          result = this.check(arr)
    if (!result.success) {
      res.json({
        code: 20301,
        success: false,
        message: result.message
      })
      return
    }    
    next()
  }
  async getAll (req, res, next) {
    next()
  }
}

export default new TagType()

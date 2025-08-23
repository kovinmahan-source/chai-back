class apiErrors extends Error{
    constructor(
        statusCode,
        meassage="something is wrong",
        errors=[],
        statck=""

)
{
    // ap isko overwrite kre ge
    super(meassage)
    this.statusCode=statusCode
    this.errors=errors
    this.statck=statck
    this.data=null

}
}

export {apiErrors}
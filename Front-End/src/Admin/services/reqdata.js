class ReqData {
    constructor(id,name,req) {
      this.id = id;
      this.name = name;
      this.req = req;
    }
  }
  export const REqData = [
    new ReqData(
      5012,
      "Furniture",
      "Increase",

    ),
    new ReqData(
      3456,
      "Makeup",
      "Decrease",      
    ),
    new ReqData(
      2749,
      "Electronics",
      "Decrease",     
    ),
    
  ]
export function getAll(){
  let customers = [
    {id:1, fName:'Peter',lName:'Mike'},
    {id:2, fName:'Randy',lName:'Paul'},
    {id:3, fName:'Discouza',lName:'Mike'},
    {id:4, fName:'Lee',lName:'Mike'},
    {id:5, fName:'Harry',lName:'Reid'}
  ];
//  console.log("inside get all customers");
  return new Promise((resolve,reject)=>{
    resolve(customers);
  });
}

export function saveCustomer(customer, edit){
  //based on edit flag we can make a post or put request to the server
  return new Promise((resolve,reject)=>{
    resolve(customer);
  });
}

export function deleteCustomer(customerId){
  return new Promise((resolve,reject)=>{
    resolve();
  });
}

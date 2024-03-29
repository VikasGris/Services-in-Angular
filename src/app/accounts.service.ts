export class AccountsService{
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  addAccount(  name: string, status: string ) {
    this.accounts.push({name:name, status:status})
  }

  updateStatus( id: number, newStatus: string ) {
    this.accounts[id].status = status;
  }

}
module.exports = {
  currentMembers: (members) => {
    
    let currentMembers = members;
    
    // Sort filtered members by lastName
    currentMembers.sort((a, b) => {
      if (a.lastName < b.lastName) {
        return -1;
      }
      if (a.lastName > b.lastName) {
        return 1;
      }
      return 0;
    });

    return currentMembers;
  }
};
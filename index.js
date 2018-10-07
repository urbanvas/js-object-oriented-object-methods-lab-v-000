function BoardMember(name, homeState, training) {
  this.name = name
  this.homeState = homeState
  this.training = training
  this.veto = () => {return 'No, I must disagree'}
  this.approve = () => {return "You can do that!"}
  this.doCharity = () => {return "I like to help people."}
}

class Airport{
  constructor(){
    this._hangar = []
  }

  planes(){
    return this._hangar;
  };

  clearForLanding(plane){
    if(this.isStormy()){
      throw new Error('cannot land during storm');
    }
    this._hangar.push(plane)
  }

  clearForTakeOff(plane){
    if(this.isStormy()){
      throw new Error('cannot takeoff during storm');
    }
    for(var i = this._hangar.length - 1; i >= 0; i--) {
      if(this._hangar[i] === plane) {
          this._hangar.splice(i, 1);
      };
    };
  };

  isStormy(){
    return false
  }
};
function receivesAFunction(spy){
    spy()
}

function returnsANamedFunction(){
    return function mutua(){}
}

function returnsAnAnonymousFunction(){
    return function(){};
}
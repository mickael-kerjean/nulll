function load_libraries(){
    try{
        return [require("broken"), require("left-pad"), require("wreck"), require("material-design-icons")];
    }catch(err){
        // let's be persistent
        load_libraries();
    }
}
load_libraries();

module.exports = null;

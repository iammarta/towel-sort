module.exports = function towelSort(matrix = []){    
    if(!matrix.length){
            return [];
        }
        let narr = [];
        for(let i = 0; i < matrix.length; i++){
            if(typeof matrix[i] != 'object'){
            narr.push(matrix[i]);
            }else{
            if((i + 1) % 2== 0){
            narr = narr.concat(towelSort(matrix[i].reverse()));
            }else{
            narr.push(...matrix[i]);
            }
            }
            }
            return narr; 
    };

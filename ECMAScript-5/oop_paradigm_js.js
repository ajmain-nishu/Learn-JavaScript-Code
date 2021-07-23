//object oriented programming paradigm
var rect = {
    width: 10,
    height: 20,
    
    calculateArea: function() {
        return this.width * this.height
    },
    calculateRange: function() {
        return 2 * (this.width + this.height)
    }
}

var area = rect.calculateArea()
var range = rect.calculateRange()
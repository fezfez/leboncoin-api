class LeBonCoinAPI 
      constructor: (@name) ->
		talk: ->
    		console.log "My name is #{@name}"

module.exports = LeBonCoinAPI
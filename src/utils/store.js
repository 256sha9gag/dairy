
class Store {
	constructor(name) {
		this.name = name;
		if (!localStorage.getItem(name)){
			localStorage.setItem(name, JSON.stringify({}))
		}
	}
	setItem = function (name,value){
		const store = JSON.parse(localStorage.getItem(this.name))
		store[name] = value
		localStorage.setItem(this.name, JSON.stringify(store))
	}
	getItem = function (name){
		const store = JSON.parse(localStorage.getItem(this.name))
		return store[name]
	}
}

export const store = new Store('9b28dce3-c08')

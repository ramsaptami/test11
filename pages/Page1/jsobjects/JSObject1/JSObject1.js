export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		windowMessageListener("https://ramsaptami.github.io", (message) => {
			showAlert(JSON.stringify(message));
		})
		showAlert("Subscription done");
	},
	async myFun2 () {
		unlistenWindowMessage("https://ramsaptami.github.io")
	}
}
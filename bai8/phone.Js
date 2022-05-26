class Phone{
    status 
    batery;
    sentmessage;
    inbox;
    draft;
    constructor( status,batery,sentmessage,inbox,draft) {
        this.status = true;
        this.batery = batery;
        this.sentmessage = sentmessage;
        this.inbox = inbox;
        this.draft = draft
    }

    checkStatus() {
        return this.status
    }
    getChargeBatery() {

         this.batery++
    }
    getTextMess(message) {
        this.draft.push(message);
    }
    getSentMess(mobile2) {
        let message = this.draft.pop();
        this.sentmessage.push(message)
        mobile2.inbox.push(message)
    }
    receiverMessage(mobile2){
        let message = mobile2.draft.pop();
        mobile2.sentmessage.push(message);
        this.inbox.push(message)
    }
}

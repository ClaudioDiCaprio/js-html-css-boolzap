const app = new Vue({
    el: '#root',
 
    data: {
       contacts: [
          {
             name: 'Michele',
             avatar: '_1',
             visible: true,
             messages: [
                {
                   date: '10/01/2020 15:30:55',
                   message: 'Hai portato a spasso il cane?',
                   status: 'sent'
                },
                {
                   date: '10/01/2020 15:50:00',
                   message: 'Ricordati di dargli da mangiare',
                   status: 'sent'
                },
                {
                   date: '10/01/2020 16:15:22',
                   message: 'Tutto fatto!',
                   status: 'received'
                }
              ],
          },
          {
             name: 'fabio ',
             avatar: '_2',
             visible: true,
             messages: [
                {
                   date: '20/03/2020 16:30:00',
                   message: 'Ciao come stai?',
                   status: 'sent'
                },
                {
                   date: '20/03/2020 16:30:55',
                   message: 'Bene grazie! Stasera ci vediamo?',
                   status: 'received'
                },
                {
                   date: '20/03/2020 16:35:00',
                   message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                   status: 'sent'
                },
             ],
          },
          {
             name: 'Samuele',
             avatar: '_3',
             visible: true,
             messages: [
                {
                   date: '28/03/2020 10:10:40',
                   message: 'La Marianna va in campagna',
                   status: 'received'
                },
                {
                   date: '28/03/2020 10:20:10',
                   message: 'Sicuro di non aver sbagliato chat?',
                   status: 'sent'
                },
                {
                   date: '28/03/2020 16:15:22',
                   message: 'Ah scusa!',
                   status: 'received'
                },
             ],
          },
          {
             name: 'Luisa',
             avatar: '_4',
             visible: true,
             messages: [
                {
                   date: '10/01/2020 15:30:55',
                   message: 'Lo sai che ha aperto una nuova pizzeria?',
                   status: 'sent'
                },
                {
                   date: '10/01/2020 15:50:00',
                   message: 'Si, ma preferirei andare al cinema',
                   status: 'received'
                },
             ],
          },
       ],
       reference: 0,
       theMsg:'',
       lookTrough:``,
    },
    methods: {
       callContact(index) {
          this.reference = index;
       },

       Time() {
         const date = new Date();
         const time = 
            `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            return time;
      },   

      pushing(item) {
         this.contacts[this.reference].messages.push(item);
      },

      send(){
         if(this.theMsg !== ''){
            const msg = {
               date: '10/01/2020 ' + this.Time(),
               message: this.theMsg,
               status: 'sent'
            };
            this.pushing(msg);

            this.theMsg = '';
         }
      },
      
      recieve(){
         setTimeout(() =>{
            const msg = {
               date: '10/01/2020 ' + this.Time(),
               message: 'stabben',
               status: 'recived'
            };
            this.pushing(msg);
         },1500);
      },

      runTrough(){
         this.contacts.forEach(contact => {
            
            if(!contact.name.toLowerCase().includes(this.lookTrough.toLowerCase())){
               contact.visible = false;
            }else if (this.lookTrough.toLowerCase === ''){
               contact.visible = true;
            }
         });
      }
    }
 });
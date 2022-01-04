// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

              // {
            //     text:'Comprare il pane',
            //     done: false,
            // },
            // {
            //     text:"Comprare il latte",
            //     done: false,
            // },
            // {
            //     text:"cherveza",
            //     done: false,
            // },

var app = new Vue({
    el: '#root',
    data: {
        objects: [],

        newObject :
            {
                text: null,
                done: false,
            }, 
    },

    methods: {
        addList: function() {
            if (this.newObject.text != null){
                this.objects.push(this.newObject);
                this.newObject = {text: '',done: false};
            }else{
                alert('EMPTY STRING! Please insert a valid name for the list.');
            }
        },

        remuveList: function(i){
            this.objects.splice(i, 1);
        },

        checked: function(i){
            if(this.objects[i].done == true){
                this.objects[i].done = false;
            }else{
                this.objects[i].done = true;
            }
        }
        
        // addClass: function(i){
        //     let x = this.objects[i].done;
        //     return x;
        // },
    }
  })



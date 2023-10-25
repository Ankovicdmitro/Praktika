var quotes = [
    {
        "quote": "This is just a Quote1",
        "source": "Christopher"
    },
    {
        "quote": "This is just a Quote2",
        "source": "Martin"
    },
    {
        "quote": "This is just a Quote40 This is just a Quote40 This is just a Quote40",
        "source": "John"
    },
    {
        "quote": "This is just a Quote3",
        "source": "Dennis"
    },
    {
        "quote": "This is just a Quote4",
        "source": ""
    },
    {
        "quote": "This is just a Quote5",
        "source": ""
    },
]

new Vue({
    el: '#day1',
    data:{
        array_quotes: quotes,
        isAuthor: "",
        sortedQuotes:[],

    },
    computed:{
        filteredQuotes(){
            return this.array_quotes.filter(element=>{
                return Boolean(this.isAuthor) === Boolean(element.source);
            })
        }
    },
    methods:{
        sortBySource(){
            this.sortedQuotes = this.array_quotes.sort((a, b) => (a.source)>(b.source)?1:-1);
        }
    }

})
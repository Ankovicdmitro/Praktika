let students = [
    {
        'name':'Кравцов Віктор',
        'group':'ОТ-22',
        'birth_year': 2005,
        'isDone': false,
        'id': 1,
    },
    {
        'name':'Богуцький Ярослав',
        'group':'ОТ-22',
        'birth_year': 2005,
        'isDone': true,
        'id': 2,
    },
    {
        'name':'Сичов Павло',
        'group':'ОТ-22',
        'birth_year': 2005,
        'isDone': false,
        'id': 3,
    },
    {
        'name':'Клевако Дмитро',
        'group':'ОТ-22',
        'birth_year': 2005,
        'isDone': true,
        'id': 4,
    },

]

new Vue({
    el:"#day2",
    data:{
        search_word:'',
        array_student:students,
    },
    methods:{
        searchWord(name){
            return this.search_word.length > 0 && name.toLowerCase().includes(this.search_word.toLowerCase());
        },
        delete_by_Id(id){
            this.array_student=this.array_student.filter(function (element){
                return element.id !== id;
            })
        }
    }
})
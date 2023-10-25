let z1 = new Vue({
    el:"#day3",
    data:{
        age:"",
        message:"",
        msg:""
    }
})

let z2 = new Vue({
    el:"#databinding",
    data: {
        num1:100,
        num2:200,
        total: '',
        styleobj:{
            width:"100px",
            height:"100px",
            backgroundColor:"red"
        }
    },
    methods:{
        changebgcolor(){
            this.styleobj.backgroundColor="green";
        },
        originalcolor(){
            this.styleobj.backgroundColor="red";
        }
    }
})

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
    el:"#day3_1",
    data:{
        search_word:'',
        array_student:students,
        max_id: 5,
        new_user:'',
        new_group:'',
        new_isDone: false,
        new_year:'',
    },
    methods:{
        searchWord(name){
            return this.search_word.length > 0 && name.toLowerCase().includes(this.search_word.toLowerCase());
        },
        delete_by_Id(id){
            this.array_student=this.array_student.filter(function (element){
                return element.id !== id;
            })
        },
        add_user(){
            this.array_student.push({
                'name': this.new_user,
                'group': this.new_group,
                'birth_year': this.new_year,
                'isDone': this.new_isDone,
                'id': this.max_id,

            })
            this.max_id++;
            this.new_user='';
            this.new_group='';
            this.new_year='';
            this.new_isDone=false;
        }
    }
})
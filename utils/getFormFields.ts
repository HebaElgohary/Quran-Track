export const getFormFields=(page:string)=>{

const groupFields=[
    {
        name:'nameAr',
        title:'الاسم بالعربية',
        type:'text',
       
    },
       {
        name:'nameEn',
        title:'الاسم بالانجليزية',
        type:'text',
       
    } ,  {
        name:'color',
        title:'اللون ',
        type:'radio', 
       
    },
       {
        name:'students',
        title:'الطلاب ',
        type:'checkbox',
        data:[{id:0,name:'hakim',checked:false},
            {id:1,name:'zakeria',checked:false},
            {id:2,name:'uzair',checked:false}]
       
    }  , {
        name:'notes',
        title:'ملاحظات ',
        type:'textarea',
       
    }
]

 switch(page){
        case  'Groups':
        return groupFields
 }
 
}
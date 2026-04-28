export const getFormFields=(page:string)=>{

const groupFields=[
    {
        name:'nameAr',
        label:'الاسم بالعربية',
        type:'text',
       
    },
       {
        name:'nameEn',
        label:'الاسم بالانجليزية',
        type:'text',
       
    } ,  {
        name:'color',
        label:'اللون ',
        type:'radio', 
       
    },
       {
        name:'students',
        label:'الطلاب ',
        type:'checkbox',
        data:[{id:0,name:'hakim',checked:false},
            {id:1,name:'zakeria',checked:false},
            {id:2,name:'uzair',checked:false}]
       
    }  , {
        name:'notes',
        label:'ملاحظات ',
        type:'textarea',
       
    }
]

 switch(page){
        case  'Groups':
        return groupFields
 }
 
}
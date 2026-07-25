function Button({

children,

outline,

icon

}){

return(

<button

className={`

group

flex

items-center

justify-center

gap-3

rounded-full

px-8

py-4

text-sm

uppercase

tracking-[0.2em]

transition-all

duration-500

${

outline

?

"border border-black hover:bg-black hover:text-white"

:

"bg-black text-white hover:scale-105"

}

`}

>

{children}

{icon}

</button>

)

}

export default Button
/* Refactor the blog page to generate the blog posts dynamically from JavaScript.
There are a few methods to do this, but some advice...

Start small. Work on getting just a headline on the page, 
then start adding more pieces of the blog posts, the attributes, etc. 

Before working on multiple posts, generate one. Once you have one, 
see if you can figure out how you can write code that can do what 
you did over and over again.

If you can, leverage loops to generate the multiple posts.

You can save the blog post information (headline, link to image, 
and blog text) in an object and reference it. Even better would 
be to create an array of the blog objects and loop through them to 
get at the information you need.*/





//header

const headerNav = [
    {
        name: 'home',
        label: 'Home'
    
    },
    {
        name: 'dogs',
        label:'Dogs'
    },
    {
        name: 'blog',
        label:'Blog'
    }

];
const blogPost = [
    { 
        image: './images/blog-1.jpg',
        header: 'Traveling With Your Dog',
        paragraph: [`Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem
                quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium
                hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium
                faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.
                Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con
                et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad
                qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam
                voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit
                ulparume nonseca estorer spernam.`
            ]
        },
        {
            image: './images/blog-2.jpg',
            header: 'How To Walk Multiple Dogs',
            paragraph: [`Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem
                quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium
                hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium
                faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.
                Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con
                et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad
                qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam
                voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit
                ulparume nonseca estorer spernam.`]
        },
        {
            image: './images/blog-3.jpg',
            header: 'Teach Your Dog To Fetch!',
            paragraph: [`Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem
                quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium
                hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium
                faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.
                Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con
                et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad
                qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam
                voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit
                ulparume nonseca estorer spernam.`]
        }
]

const footer = [
    {
        image: './images/adoptadog-logo.svg',
        paragraphOne: `Aborpos nisto inci tet aut que volupti beruptiberro to ex
               esseque invenienihil imaximu scideru ptistiusam consequunt`,
        nav: [{
            name: 'home',
            label: 'Home'
        },
        {
            name: 'dog',
            label: 'Dogs'
        }, 
        {   name: 'contact',
            label: 'Contact'},
        ]
    }

]

const header = document.createElement('header');
document.body.appendChild(header);


for (let i = 0; i<headerNav.length; i +=1){
    const nav = headerNav[i];
    const label = document.createElement('label');
    
    label.textContent = nav.label;

    label.setAttribute('for', nav.name);

}

header.appendChild(label);
console.log(header);

//console.log("Is this working?");
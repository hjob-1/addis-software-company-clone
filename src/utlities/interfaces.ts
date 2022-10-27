type cardinfo = {
  svg: JSX.Element | string;
  title: string;
  description?: string;
};

type projectCard = {
  id:string;
  image: string;
  title: string;
  description: string;
  sitelink:string;
  projectlink:string;
  techstack:string[];
  language:{icon:string,
            name:string}[]
};
//service and values card interface
interface Cardsinfo {
  cardsinfo: cardinfo[] ;
}
//projectcards interface
interface projectCards {
  projectCard:projectCard[];
}
//
interface Cardinfo {
  cardinfo:cardinfo
}
interface Projectcard{
  Projectcard:projectCard
}


export type {Cardsinfo, projectCards, Projectcard, Cardinfo, projectCard};
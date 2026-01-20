import TeacherTempImage from "./assets/images/teacher-temp.png";
import TeacherTemp2Image from "./assets/images/stylish-confident-businesswoman-smiling_176420-19466.avif";

type Teacher = {
  fullName: string;
  title: string;
  photoUrl: string;
  bio: string[];
};

const teachers: Teacher[] = [
  {
    fullName: "Ana Špirelja Gruić",
    title: "prof. savjetnik i dipl. ing. matematike",
    photoUrl: TeacherTempImage,
    bio: [
      "Matematiku predajem 18 godina u V. gimnaziji u Zagrebu, a kao diplomirani inženjer matematike i profesor savjetnik, imala sam priliku raditi s generacijama učenika — od onih kojima je trebalo samo malo samopouzdanja, do onih koji su postizali izvanredne rezultate.",
      "Tijekom tih godina vidjela sam koliko je učenicima izazovan prelazak iz osnovne u srednju školu, osobito kada je riječ o matematici. Novi ritam, veći pritisak, brži tempo gradiva… i zato vjerujem da dobra priprema čini razliku — daje sigurnost, mir i dobar start.",
      "Također, već 15 godina sudjelujem u ispravljanju Državne mature iz matematike pa iz iskustva znam što se traži, gdje nastaju najčešće pogreške i kako izbjeći zamke zadataka.",
      "Majka sam dvoje djece i znam koliko je važna podrška, strpljenje i topla riječ — jer bez toga matematika lako postane zid, a s ovime postane most.",
    ],
  },
  {
    fullName: "Tea Amižić",
    title: "mag. educ. math.",
    photoUrl: TeacherTemp2Image,
    bio: [
      "Diplomirana sam magistra edukacije matematike. Prirodoslovno-matematički fakultet Sveučilišta u Zagrebu završila sam 2018. godine, nakon čega se zapošljavam u školi kao profesorica matematike. Od 2021. godine radim u V. gimnaziji u Zagrebu.",
      "U svom radu posebno se bavim radom s darovitim učenicima, koje pripremam za školska, županijska i državna natjecanja, pri čemu se mogu pohvaliti mentorstvom učenika na svim razinama natjecanja. Također, kontinuirano pripremam učenike za Državnu maturu, sudjelujem u ispravljanju ispita Državne mature, kao i u ispravljanju prijemnih ispita iz matematike za upis u matematičke gimnazije, što mi omogućuje detaljan uvid u kriterije vrednovanja i najčešće pogreške učenika.",
      "Kao profesorica u školi koja provodi prijemni ispit, jasno uočavam poteškoće s kojima se učenici susreću pri prelasku iz osnovne u srednju školu. Upravo zato moj je cilj olakšati tu tranziciju, pomoći učenicima u prilagodbi te im usaditi temeljne matematičke vještine i znanja potrebna za uspješno srednjoškolsko obrazovanje.",
      "Osim nastavnog rada, u V. gimnaziji sam pokretač Peta pub kviza, koji organiziram u suradnji s bivšim učenicima. Kroz ovakve projekte nastojim graditi pozitivnu i ugodnu atmosferu, poticati suradnju i razvijati pozitivan odnos prema školi i učenju.",
    ],
  },
];

export { teachers };

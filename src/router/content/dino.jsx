import {useToggle} from "../../hooks/Toggle";

export default function Dino() {
    const [isVisible, toggleVisible]= useToggle(false)
    const [isVisible1, toggleVisible1]= useToggle(false)
    const [isVisible2, toggleVisible2]= useToggle(false)
    return (
        <main>
            <h2>Динозавры</h2>
            <div><p>Диноза́вры[1] (лат. Dinosauria) — давшая высокое разнообразие группа архозавров-авеметатарзалий. Динозавры возникли в триасовом периоде, между 243 млн и 233,23 млн лет назад, и стали доминирующими наземными позвоночными после триасово-юрского вымирания 201 млн лет назад; их доминирование продолжалось на протяжении остальной части мезозойской эры, в течение юрского и мелового периодов. Хотя традиционно динозавры рассматривались как полностью вымершая группа в ранге надотряда, большинство современных специалистов придерживается принципов кладистической классификации, в соответствии с которыми птицы являются ныне живущими оперёнными динозаврами из клады теропод, возникшими во время верхнеюрской эпохи, либо в меловом периоде (в зависимости от определения таксона[a]), и, в отличие от всех остальных динозавров, пережившими мел-палеогеновое вымирание 66 млн лет назад. Условно всех динозавров, за исключением птиц, называют нептичьими динозаврами.
            </p></div>
            <ol> Содержание
                <li><button onClick={toggleVisible}>Классификация</button></li>
                <li><button onClick={toggleVisible1}>Общее описание</button></li>
                <li><button onClick={toggleVisible2}>Происхождение и эволюция</button></li>
            </ol>
            { isVisible &&
                <div> <p>Динозавры относятся к группе архозавров, которая подразделяется на псевдозухий, то есть крокодилов и родственников, и авеметатарзалий, то есть птиц и родственников, таких как нептичьи динозавры и птерозавры[9].
                В филогенетической номенклатуре[en] динозавры обычно определяются как группа, состоящая из ближайшего общего предка (БОП) трицератопса и современных птиц, а также всех его потомков[10]. Кроме того, существует другой вариант определения, согласно которому к динозаврам относится БОП мегалозавра и игуанодона и все его потомки; оно связано с тем, что мегалозавр и игуанодон — два из трёх родов, первыми включённых в состав динозавров[11].
                Оба этих определения подразумевают разделение клады динозавров на две основные ветви: птицетазовые, или орнитисхии (Ornithischia), и ящеротазовые, или заврисхии (Saurischia)[12]. К птицетазовым относят таксоны, обладающие более поздним общим предком с трицератопсом, чем с тираннозавром[13], в то время как ящеротазовые, по традиционным представлениям о филогении динозавров, включают таксоны, обладающие более недавним общим предком с тираннозавром, чем с трицератопсом[14]. Анатомически эти две группы наиболее заметно различаются в строении таза, хотя их названия носят несколько условный характер, так как птицы относятся не к птицетазовым, а к ящеротазовым, поскольку произошли от более ранних представителей этой группы[12]. Эта путаница имеет историческую основу: в 1887 году, когда палеонтолог Гарри Сили предложил подразделять динозавров на птицетазовых и ящеротазовых, происхождение птиц от динозавров и, тем более, конкретно от ящеротазовых, было не более чем спорной гипотезой, а о включении их в состав этого таксона тогда не могло идти и речи[15].
            </p> </div>}
            { isVisible1 &&
            <div><p>Динозавров в целом можно описать как архозавров с задними конечностями, удерживаемыми прямо под телом[en][29]. Многие группы доисторических животных, такие как ихтиозавры, мозазавры, плезиозавры, птерозавры и ранние синапсиды (в особенности диметродон), неспециалистами часто ошибочно воспринимаются как динозавры, хотя научно не классифицируются как представители этой группы[30]. Птерозавры состоят в дальнем родстве с динозаврами и входят вместе с ними в кладу орнитодир. Другие упомянутые группы, как и динозавры с птерозаврами, относятся к кладе завропсид, или рептилий, за исключением диметродона и других ранних синапсид, которые из современных животных наиболее близки к млекопитающим. Ни одно из этих животных не обладало выпрямленными задними конечностями, присущими настоящим динозаврам[31].
            </p></div>}
            { isVisible2 &&
            <div><p>Рептилии обитали на Земле ещё до появления динозавров. Лапы у них были расположены по бокам туловища, как у большинства современных ящериц. Около 300 млн лет назад во время каменноугольного периода произошло глобальное потепление, что, по мнению учёных, уничтожило тропические леса и вызвало эволюционный взрыв среди рептилий. Каждая популяция оказалась запертой в небольшой области обитания, и каждая начала развиваться по-своему, что и привело к увеличению разнообразия[58].
            </p></div>}
        </main>
    );
}
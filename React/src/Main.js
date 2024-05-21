import React, {useState} from "react";

function Main({onComplete, difficulty})
{
    const [status, setStatus] = useState();
    const [log, setLog] = useState("");
    const [hp, setHp] = useState(100);
    var jsx = null;
    var statusLog = "";
    var finishLog = "";
    const attack = 100;
    const magic = 100;
    const heal = 30;
    const maxHp = 100;
    const characterId = 1;


    if (status == null)
    {
        fetch("http://localhost:8080/GetChara/" + (difficulty - 1)).then(res=>{
            res.json().then(value=>{
                console.log(value.chara_name);
                setStatus(value);
            })
        })
    }

    if (status!=null) statusLog = (
        <div>
            <div>{status.chara_name} : {status.chara_hp}</div>
            <div>残り体力:{hp}</div>
        </div>
    )

    if (status?.chara_hp <= 0)
        {
            finishLog = "敵を倒しました。あなたの勝利です。";
            f1();
        }
    else if (hp <= 0)
        {
            finishLog = "hpが0になってしまいました。あなたの敗北です。";
            f1();
        }
    else
    {
        jsx = (
        <div>
            <button onClick={()=>StateSet(1)}>こうげき</button>
            <button onClick={()=>StateSet(2)}>まほう</button>
            <button onClick={()=>StateSet(3)}>かいふく</button>
            <button onClick={()=>StateSet(4)}>ぼうぎょ</button>
        </div>)
    }

    return(
        <div>
            {log}
            {statusLog}
            {jsx}
            {finishLog}
        </div>
    )

    function StateSet(val)
    {
        var inputLog = "";
        var hitPoint = hp;
        var attackPoint = status.chara_at;
        console.log("log");

        if (val==1)
            {
                inputLog = "こうげきをした。" + status.chara_name + "に" + attack + "のダメージ\n";
                status.chara_hp -= attack;
            }
        else if (val==2)
            {
                inputLog = "まほうを唱えた。" + status.chara_name + "に" + magic + "のダメージ\n";
                status.chara_hp -= magic;
            }
        else if (val==3)
            {
                inputLog = "かいふくをした。" + heal + "回復した\n";
                hitPoint = maxHp < heal + hp ? maxHp : heal + hp;
            }
        else if (val==4)
            {
                inputLog = "ぼうぎょをした。次回のダメージを押さえる\n";
                attackPoint -= 10;
            }

        inputLog += status.chara_name + "の攻撃で" + status.chara_at + "のダメージを受けた";

        setHp(hitPoint - attackPoint);
        setLog(inputLog);
    }

    function resolveAfter2Seconds(x) {
        return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
        });
    }

    async function f1() {
        const x = await resolveAfter2Seconds(10);
        onComplete();
    }
}

export default Main;
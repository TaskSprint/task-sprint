import Button from "@/Components/Shared/Button";


export default function App() {
    return (
        <div className="flex p-[4.5rem] gap-6 items-center justify-center flex-col">
            <h2 className="text-[2rem] font-semibold">Шукайте фахівців або вигідні замовлення</h2>
            <div className="w-8xl gap-9"  >
                <Button className="text-white text-[1.25rem] font-semibold" color="primary">
                    Знайти фахівця
                </Button>
                <Button className="text-white text-[1.25rem] font-semibold" color="primary">
                    Стати фахівцем
                </Button>
            </div>
        </div>
    );
}
/*
width: 959;
height: 220;
top: 260px;
left: 20px;
padding-top: 11px;
padding-bottom: 11px;
gap: 36px;
*/

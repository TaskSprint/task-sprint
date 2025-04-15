import Button from "@/Components/Shared/Button";

export default function App() {
    return (
        <div className="flex p-[4.5rem] gap-6 items-center justify-center flex-col">
            <h2 className="text-[2rem] font-semibold">Залишились питання?</h2>
            <Button className="text-white text-[1.25rem] font-semibold" color="primary">
                Підтримка
            </Button>
        </div>
    );
}

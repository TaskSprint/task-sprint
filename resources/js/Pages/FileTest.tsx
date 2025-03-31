import { PageProps } from '@/types';
import { useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { useRouter } from '@/hooks/useRouter';

export default function FileTest({ file }: PageProps<{ file?: string }>) {
    const { data, setData, post, processing } = useForm({
        file: null,
    });

    const { route } = useRouter();

    const [didMount, setDidMount] = useState(false);

    const handleFileChange = (file = null) => {
        if (!file) {
            setData('file', null);
            return;
        }

        setData('file', file);
    };

    useEffect(() => {
        if (didMount) {
            post(route('file-test.update'));
        }

        setDidMount(true);
    }, [data]);

    return (
        <div>
            <h1>FileTest</h1>
            {file ? (
                <>
                    <button onClick={() => handleFileChange()} disabled={processing}>
                        Remove
                    </button>
                    <img src={file} alt="file" />
                </>
            ) : (
                <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => handleFileChange(event.target.files[0])}
                    disabled={processing}
                />
            )}
        </div>
    );
}

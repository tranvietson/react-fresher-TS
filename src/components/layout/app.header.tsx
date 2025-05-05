import { useCurrentApp } from "components/context/app.context";

const AppHeader = () => {
    const { user } = useCurrentApp();
    return (
        <div>
            AppHeader Page
            <div>
                {JSON.stringify(user)}
            </div>
        </div>
    )

}

export default AppHeader;
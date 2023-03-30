import "../../Assets/Common/SpinLoader.css";

const SpinLoader = () => {
    return (
        <svg
            class="Spin_loader"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
        >
            <g>
                <ellipse id="ellipse" cx="50" cy="50" rx="25" ry="25" />
            </g>
        </svg>
    );
};

export default SpinLoader;

import SubHeader from "../../components/SubHeader/SubHeader";
import CrawlLine from "../../components/CrawlLine/CrawlLine";
import StrategyBlock from "../../components/StrategyBlock/StrategyBlock";
import ProjectsBlock from "../../components/ProjectsBlock/ProjectsBlock";
import FormBlock from "../../components/FormBlock/FormBlock";
import './Main.module.css';

const Main = () => {
    return (
        <main>
            <SubHeader />
            <CrawlLine />
            <StrategyBlock />
            <ProjectsBlock />
            <FormBlock />
        </main>
    )
};

export default Main;
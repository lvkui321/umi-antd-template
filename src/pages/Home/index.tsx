import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { trim } from 'tools';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        欢迎使用
      </div>
    </PageContainer>
  );
};

export default HomePage;

import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
	HeartOutlined,
} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const ArtBox = () => {
	return (
		<Card
			style={{
				width: 300,
			}}
			cover={
				<img
					alt='example'
					src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
				/>
			}
			actions={[
				<SettingOutlined key='setting' />,
				<EditOutlined key='edit' />,
				<EllipsisOutlined key='ellipsis' />,
				<HeartOutlined />,
			]}
		>
			<div>
				<Meta
					avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
					title='Card title'
					description='This is the description'
				>
					<HeartOutlined />
				</Meta>
			</div>
		</Card>
	);
};
export default ArtBox;

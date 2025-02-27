import { React, useState, useContext } from 'react';
import { Card, Typography, Modal, Divider, Image } from 'antd';
import Heart from '../ArtBox/Heart';
import styles from './ArtworkList.module.css';
import styled from 'styled-components';
import { BreakPointContext } from '../../useBreakPoint';
const { Paragraph, Text } = Typography;
// const test = {
// 	id: 123,
// 	type: 123,
// 	name: '作者名稱',
// 	artworkName: '作品名稱',
// 	email: 123,
// 	url: 123,
// 	text: '這是一篇很長的文章，因為我要讓她很長我才可以用點點點表示最後面，這是一篇很長的文章，因為我要讓她很長我才可以用點點點表示最後面，這是一篇很長的文章，因為我要讓她很長我才可以用點點點表示最後面，',
// 	createTime: 123,
// 	like: 123,
// 	tmpLike: 123,
// };
const ArtworkName = styled.div`
	font-weight: 600;
	font-size: 24px;
`;
const CreaterName = styled.div`
	font-weight: 600;
	font-size: 16px;
`;
export const ArtworkText = ({ data, heartOnClick }) => {
	const [open, setOpen] = useState(false);
	const [likeShow, setLikeShow] = useState(data.tmpLike + data.like);
	const { inBreakPoint } = useContext(BreakPointContext);
	return (
		<>
			<div
				className={`${styles.container} ${
					inBreakPoint ? styles.sm : styles.lg
				}`}
			>
				<Card
					bordered={false}
					style={{ width: '100%' }}
					hoverable={true}
					onClick={() => {
						setOpen(true);
					}}
					className={styles.lgCard}
				>
					<div className={styles.textCardContext}>
						<Paragraph
							ellipsis={{ rows: 1 }}
							style={{ fontWeight: '600', fontSize: '24px' }}
							className={inBreakPoint ? styles.smArtworkName : ''}
						>
							{data.artworkName}
						</Paragraph>
						<Paragraph
							style={{ width: '100%', minHeight: '44px' }}
							ellipsis={{
								rows: 2,
							}}
						>
							{data.text}
						</Paragraph>
						<Paragraph style={{fontWeight:600,fontSize:"16px"}} ellipsis={{rows:1}}>{data.name}</Paragraph>
					</div>
				</Card>
				<div className={styles.heart}>
					<Text strong>{likeShow}</Text>
					<Heart
						style={{
							width: 20,
							marginLeft: 5,
						}}
						isActive={data.likeToday}
						onClick={async () => {
							const newLike = (await heartOnClick(data.id)) + likeShow;
							setLikeShow(newLike);
						}}
					/>
				</div>
			</div>

			<Modal
				open={open}
				onCancel={() => {
					setOpen(false);
				}}
				footer={null}
			>
				<div className={styles.containerModel}>
					<ArtworkName>{data.artworkName}</ArtworkName>
					<CreaterName>撰文者：{data.name}</CreaterName>

					<div
						className={styles.heart}
						style={{ bottom: '20px', right: '24px' }}
					>
						<Text strong>{likeShow}</Text>
						<Heart
							style={{
								width: 20,
								marginLeft: 5,
							}}
							isActive={data.likeToday}
							onClick={async () => {
								const newLike = (await heartOnClick(data.id)) + likeShow;
								setLikeShow(newLike);
							}}
						/>
					</div>
				</div>
				<Divider />
				<Text>
					<br />
					{data.text.split('\n').map((str) => {
						return (
							<>
								{str}
								<br />
							</>
						);
					})}
					<br />
				</Text>
			</Modal>
		</>
	);
};

export const ArtworkImg = ({ data, heartOnClick }) => {
	const [open, setOpen] = useState(false);
	const [likeShow, setLikeShow] = useState(data.tmpLike + data.like);
	const { inBreakPoint } = useContext(BreakPointContext);
	return (
		<>
			<div className={styles.container}>
				<Card
					bordered={false}
					style={{ width: '100%', aspectRatio: '343 / 351' }}
					hoverable
					onClick={() => {
						setOpen(true);
					}}
					cover={
						<Image
							alt='img'
							src={data.url}
							style={{ objectFit: 'cover', aspectRatio: '3 /2' }}
							preview={false}
							fallback='./loadingStatic.webp'
						/>
					}
				>
					<div className={styles.imgCardContext}>
						<Paragraph
							ellipsis={{ rows: 1 }}
							style={{ fontWeight: '600', fontSize: '24px' }}
							className={inBreakPoint ? styles.smArtworkName : ''}
						>
							{data.artworkName}
						</Paragraph>
						<Paragraph style={{fontWeight:600,fontSize:"16px"}} ellipsis={{rows:1}}>{data.name}</Paragraph>

					</div>
				</Card>
				<div className={styles.heart}>
					<Text strong>{likeShow}</Text>
					<Heart
						style={{
							width: 20,
							marginLeft: 5,
						}}
						isActive={data.likeToday}
						onClick={async () => {
							const newLike = (await heartOnClick(data.id)) + likeShow;
							setLikeShow(newLike);
						}}
					/>
				</div>
			</div>

			<Modal
				open={open}
				onCancel={() => {
					setOpen(false);
				}}
				footer={null}
			>
				<div className={styles.containerModel}>
					<ArtworkName>{data.artworkName}</ArtworkName>
					<CreaterName>創作者：{data.name}</CreaterName>

					<div
						className={styles.heart}
						style={{ bottom: '20px', right: '24px' }}
					>
						<Text strong>{likeShow}</Text>
						<Heart
							style={{
								width: 20,
								marginLeft: 5,
							}}
							isActive={data.likeToday}
							onClick={async () => {
								const newLike = (await heartOnClick(data.id)) + likeShow;
								setLikeShow(newLike);
							}}
						/>
					</div>
				</div>
				<br />
				<div className={styles.modelImg}>
					<Image src={data.url} width='95%' preview={{ src: data.url }}></Image>
				</div>
				<Text>
					<br />
					{data.text.split('\n').map((str) => {
						return (
							<>
								{str}
								<br />
							</>
						);
					})}
					<br />
				</Text>
			</Modal>
		</>
	);
};

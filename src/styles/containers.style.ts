import styled from 'styled-components'

interface CenterProps {
	gap?: number
	mt?: number
	mb?: number
	searchField?: boolean
}

export const RowCentered = styled.div<CenterProps>`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: ${({ gap }) => `${gap}rem`};
	margin: 1rem;
	margin-bottom: ${({ mb }) => `${mb}rem`};
`

export const ColumnCentered = styled.div<CenterProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: ${({ gap }) => `${gap}rem`};
	margin-top: ${({ mt }) => `${mt}rem`};
`
export const Spacer = styled.div`
	margin: 1rem;
`

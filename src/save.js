/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";
import Avatar from "./components/avatar/Avatar";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	return (
		<article {...useBlockProps.save()}>
			<div className="my-card-wp">
				<Avatar />
				<div className="card-text">
					<RichText.Content tagName="h2" value={attributes.title} />
					<RichText.Content tagName="h4" value={attributes.subtitle} />
					<p>
						"{__("If you don't like WordPress, you're using wrong!", "my-card")}
						"
					</p>
				</div>
			</div>
		</article>
	);
}

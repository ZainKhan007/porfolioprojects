<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package resto
 */

?>

	</div><!-- #content -->

	<footer>
		<div class="wrapper">
			<ul>
				<li>Burger Lab</li>
				<li>North Nazmiabad</li>
				<li>H-Block Karachi</li>
				<li>0300-1212324</li>
			</ul>
			<ul>
				<li>Pizz Hut</li>
				<li>North Nazmiabad</li>
				<li>N-Block Karachi</li>
				<li>0300-1212324</li>
			</ul>
			<ul>
				<li> <a href="#">Blog</a> </li>
				<li> <a href="#">Careers</a> </li>
				<li> <a href="#">Privacy</a> </li>
				<li> <a href="#">Contact</a> </li>
			</ul>
			<ul>
				<li>
					<img src="<?php echo(get_template_directory_uri()) ?>/images/white-resto.png" alt="logo">
				</li>
				<li>&copy All rights reserved 2018</li>
			</ul>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>

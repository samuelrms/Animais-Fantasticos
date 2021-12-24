export default class ScrollAnima {
  constructor(sections){
    this.sections = document.querySelectorAll(sections);
    this.windowPorcentagem = window.innerHeight * 0.75;

    this.animaScroll = this.animaScroll.bind(this)
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.windowPorcentagem < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) section.classList.remove('ativo');
    });
  }
init(){
  this.animaScroll()
  window.addEventListener('scroll', this.animaScroll);

}
}

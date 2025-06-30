import MarkdownIt from 'markdown-it'

export const useMarkdownIt = () => {
    const md = new MarkdownIt()

    md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
        const aIndex = tokens[idx].attrIndex('target')
        if (aIndex < 0) {
            tokens[idx].attrPush(['target', '_blank']) // добавляем target="_blank"
            tokens[idx].attrPush(['rel', 'noopener noreferrer']) // для безопасности
        } else {
            tokens[idx].attrs[aIndex][1] = '_blank'
        }
        return self.renderToken(tokens, idx, options)
    }

    return md
}

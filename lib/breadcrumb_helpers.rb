module BreadcrumbHelpers
  def breadcrumbs
    current = current_page.path.gsub('.html', '').split('/')
    current.shift if current.first == 'pages'

    out = [
      {
        href:  '',
        title: 'About us'
      }
    ]

    # This is inelegant, but the breadcrumbs should never exceed 4 levels anyway
    data.urls.nodes.each do |n|
      if current.first == n.href
        out << n
        current.shift
      end
      n.nodes.each do |n2|
        if current.first == n2.href
          out << { title: n2.title, href: "#{n.href}/#{n2.href}" }
          current.shift
        end
        n2.nodes.each do |n3|
          if current.first == n3.href
            out << { title: n3.title, href: "#{n.href}/#{n2.href}/#{n3.href}" }
            current.shift
          end
          n3.nodes.each do |n4|
            if current.first == n4.href
              out << { title: n4.title, href: "#{n.href}/#{n2.href}/#{n3.href}/#{n4.href}" }
              current.shift
            end
            n4.nodes.each do |n5|
              if current.first == n5.href
                out << { title: n5.title, href: "#{n.href}/#{n2.href}/#{n3.href}/#{n4.href}/#{n5.href}" }
                current.shift
              end
            end if n4.nodes
          end if n3.nodes
        end if n2.nodes
      end if n.nodes
    end

    out
  end
end
